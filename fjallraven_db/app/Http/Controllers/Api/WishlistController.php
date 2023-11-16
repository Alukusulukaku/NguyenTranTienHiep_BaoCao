<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Wishlist;
use Illuminate\Http\Request;

class WishlistController extends Controller
{
    public function index()
    {
        $data = Wishlist::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data],
            200
        );
    }
    public function show($id){
        $data = Wishlist::find($id);
        return response()->json(['success' => true, 'message' => 'Thành công', 'data' => $data],
        200);
    }
    public function store(Request $request){
        $wishlist = new Wishlist();
        $wishlist->user()->associate($request->user_id);
        $wishlist->product()->associate($request->product_id);
        $wishlist->save();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $wishlist],
            201
        );
    }
    public function destroy($id)
    {
        $post=Wishlist::find($id);
        if($post==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $post->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $post],
            200
        );
    }
}