<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Config;
use Illuminate\Http\Request;

class ConfigController extends Controller
{
    function index($limit, $config = 1)
    {
        $offset = ($config - 1) * $limit;
        $total_data = Config::all();
        $data = Config::offset($offset)
            ->limit($limit)->get();

        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data, 'total_data' => $total_data],
            200
        );
    }
    function show($id)
    {
        $data = Config::find($id);
        return response()->json(
            [
                'success' => true,
                'message' => 'thành công',
                'data' => $data,
            ],
            200
        );
    }
    public function getConfig()
    {
        $data = Config::where('status', 1)->first();
        return response()->json(
            [
                'success' => true,
                'message' => 'thành công',
                'data' => $data,
            ],
            200
        );
    }
    public function destroy($id)
    {
        $config = Config::find($id);
        if ($config == null) {
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        if ($config->status != 0) {
            $config->status = 0;
            $config->save();
            return response()->json(
                ['success' => true, 'message' => 'Thành công', 'data' => $config],
                200
            );
        } else {
            $config->delete();
            return response()->json(
                ['success' => true, 'message' => 'Thành công', 'data' => $config],
                200
            );
        }
    }
    function store(Request $request)
    {
        $config = new Config();
        $config->author = $request->author; //form
        $config->email = $request->email;
        $config->phone = $request->zalo;
        $config->facebook = $request->facebook;
        $config->address = $request->address;
        $config->youtube = $request->youtube;
        $config->metadesc = $request->metadesc;
        $config->metakey = $request->metakey;
        $config->youtube = $request->youtube;
        $config->created_at = date('Y-m-d H:i:s');
        $config->created_by = $request->user_id;
        $config->status = $request->status; //form
        $config->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $config],
            201
        );
    }
    function update(Request $request, $id)
    {
        $config = Config::find($id);
        $config->author = $request->author; //form
        $config->email = $request->email;
        $config->phone = $request->zalo;
        $config->facebook = $request->facebook;
        $config->address = $request->address;
        $config->youtube = $request->youtube;
        $config->metadesc = $request->metadesc;
        $config->metakey = $request->metakey;
        $config->youtube = $request->youtube;
        $config->updated_at = date('Y-m-d H:i:s');
        $config->updated_by = $request->user_id;
        $config->status = $request->status; //form
        $config->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $config],
            201
        );
    }
    function pick($id)
    {
        $config = Config::find($id);
        $config->status = 1;
        $config->save();
        $other = Config::whereNotIn('id', [$id])->get();
        foreach ($other as $item) {
            $item->status = 2;
            $item->save();
        }
        return response()->json(
            ['success' => true, 'message' => 'Đã chọn cấu hình có id là ' . $id . ' là cấu hình chính thành công', 'data' => $config],
            201
        );
    }
}
