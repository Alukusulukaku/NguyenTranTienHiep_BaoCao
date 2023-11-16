<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index($limit, $page = 1)
    {
        $offset = ($page - 1) * $limit;
        $total_data = Menu::all();
        $data = Menu::with('parent')->offset($offset)
            ->limit($limit)->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data, 'total_data' => $total_data],
            200
        );
    }
    public function all(){
        $data = Menu::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data],
            200
        );
    }
    public function getMenus(){
        $args = [['status','=',1]];
        $data = Menu::with('children')->where($args)->get();
        

        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data],
            200
        );
    }
    public function show($id)
    {
        $menu = Menu::find($id);
        $parent = $menu->parent;
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $menu, 'parent' => $parent],
            200
        );
    }
    public function getMenu($type, $status = 1)
    {
        $args_menu = [
            ['type', '=', $type],
            ['status', '=', $status]
        ];

        $data = Menu::where($args_menu)->orderBy('id', 'ASC')->get();
        return response()->json($data, 200);
    }
    public function getMenuByParentID($table_id, $type, $status = 1)
    {
        if ($table_id === 0) {
            $args_menu = [
                ['table_id', '=', $table_id],
                ['type', '=', $type],
                ['status', '=', $status]
            ];
        } else {
            $args_menu = [
                ['table_id', '<>', 0],
                ['type', '=', $type],
                ['status', '=', $status]
            ];
        }


        $data = Menu::where($args_menu)->orderBy('id', 'ASC')->get();
        return response()->json($data, 200);
    }
    function store(Request $request)
    {
        $menu = new Menu();
        $menu->name = $request->name; //form
        $menu->path = $request->path;
        $menu->created_at = date('Y-m-d H:i:s');
        $menu->created_by = $request->user_id;
        $menu->status = $request->status; //form
        if ($request->parent_id != 0) {
            $menu_parent = Menu::find($request->parent_id);
            $menu_parent->children()->save($menu);
        }
        $menu->save(); //Luuu vao CSDL
        $menu_1 = Menu::all();
        $menu_count = count($menu_1);
        $page = ceil($menu_count/5);
        

        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $menu, 'latest' => $page],
            201
        );
    }
    function update(Request $request, $id)
    {
        $menu = Menu::find($id);
        $menu->name = $request->name; //form
        $menu->path = $request->path;
        $menu->updated_at = date('Y-m-d H:i:s');
        $menu->updated_by = $request->user_id;
        $menu->status = $request->status; //form
        if ($request->parent_id != 0) {
            $menu_parent = Menu::find($request->parent_id);
            $menu_parent->children()->save($menu);
        } else {
            $menu->parent_id = $request->parent_id;
        }
        $menu->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $menu],
            201
        );
    }
    public function destroy($id)
    {
        $menu = Menu::find($id);
        if ($menu == null) {
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $menu->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $menu],
            200
        );
    }
}