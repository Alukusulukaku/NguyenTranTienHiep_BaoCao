<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Topic;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index($limit, $page = 1)
    {
        $offset = ($page - 1) * $limit;
        $total_data = Post::all();
        $data = Post::with('topic')->offset($offset)
            ->limit($limit)->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data, 'total_data' => $total_data],
            200
        );
    }
    function post_list($slug, $limit, $page = 0)
    {
        $offset = ($page - 1) * $limit;
        if ($slug != "all") {
            $topic = Topic::where('slug', $slug)->first();
            $args = [['status', '<>', 0], ['topic_id', '=', $topic->id]];
            $data = Post::with('topic')->where($args)->limit($limit)->offset($offset)->orderBy('created_at', 'DESC')->get();
            $posts_total = Post::where($args)->orderBy('created_at', 'DESC')->get();
            $total_page = ceil(count($posts_total) / $limit * 1);
        } else {
            $args = [['status', '<>', 0]];
            $data = Post::with('topic')->where($args)->limit($limit)->offset($offset)->orderBy('created_at', 'DESC')->get();
            $posts_total = Post::where($args)->orderBy('created_at', 'DESC')->get();
            $total_page = ceil(count($posts_total) / $limit * 1);
        }

        if (count($data) > 0 && count($posts_total) > 0)
            return response()->json(
                ['success' => true, 'message' => 'Thành công', 'data' => $data, 'total_data' => $posts_total, 'total_page' => $total_page],
                200
            );
    }
    function postByLimit($limit)
    {
        $args = [['status', '<>', 0]];
        $data = Post::with('topic')->where($args)->limit($limit)->orderBy('created_at', 'DESC')->get();
        if (count($data) > 0)
            return response()->json(
                ['success' => true, 'message' => 'Thành công', 'data' => $data],
                200
            );
    }
    function post_detail($topic, $slug)
    {
        $topic1 = Topic::where('slug', $topic)->first();
        $post = Post::with('user')->where([['slug', '=', $slug], ['topic_id', '=', $topic1->id]])->first();
        $post_other = Post::with('topic')->where([['topic_id', '=', $topic1->id]])->whereNotIn('id', [$post->id])->get();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $post, 'data_other' => $post_other],
            200
        );
    }
    function show($id)
    {
        $data = Post::find($id);
        $topic = $data->topic;
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $data, 'topic' => $topic],
            200
        );
    }
    function store(Request $request)
    {
        $post = new Post();
        $post->title = $request->title; //form
        $post->slug = Str::of($request->title)->slug('-');
        //upload image
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg', 'svg'])) {
                $filename = $post->slug . '.' . $extension;
                $post->image = $filename;
                $files->move(public_path('images/post'), $filename);
            }
        }

        $post->metakey = $request->metakey; //form
        $post->metadesc = $request->metadesc; //form
        $post->detail = $request->detail; //form
        $post->topic_id = $request->topic_id;
        $post->created_at = date('Y-m-d H:i:s');
        $post->created_by = $request->user_id;
        $post->status = $request->status; //form
        $post->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $post],
            201
        );
    }
    function update(Request $request, $id)
    {
        $post = Post::find($id);
        $post->title = $request->title; //form
        $post->slug = Str::of($request->title)->slug('-');
        //upload image
        $files = $request->image;
        if ($files != null) {
            if (is_file(public_path('images/post/' . $post->image))) {

                unlink(public_path('images/post/' . $post->image));
            }
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg', 'svg'])) {
                $filename = $post->slug . '.' . $extension;
                $post->image = $filename;
                $files->move(public_path('images/post'), $filename);
            }
        }


        $post->metakey = $request->metakey; //form
        $post->metadesc = $request->metadesc; //form
        $post->detail = $request->detail; //form
        $post->topic_id = $request->topic_id;
        $post->updated_at = date('Y-m-d H:i:s');
        $post->updated_by = 1;
        $post->status = $request->status; //form
        $post->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $post],
            201
        );
    }

    public function destroy($id)
    {
        $post = Post::find($id);

        if ($post == null) {
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        if (is_file(public_path('images/post/' . $post->image))) {

            unlink(public_path('images/post/' . $post->image));
        }
        $post->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $post],
            200
        );
    }
}
