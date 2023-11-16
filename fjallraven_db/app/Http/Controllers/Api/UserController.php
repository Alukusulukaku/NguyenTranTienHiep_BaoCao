<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index($roles, $limit, $page = 1, $status)
    {
        $args = [['roles', '=', $roles], ['status', '=', $status]];
        $offset = ($page - 1) * $limit;
        $total_data = User::where($args)->get();
        $data = User::where($args)->offset($offset)
            ->limit($limit)->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data, 'total_data' => $total_data],
            200
        );
    }
    public function login(Request $request)
    {
        $username = $request->username;
        $password = $request->pass;
        $args = [['username', '=', $username], ['roles', '=', $request->roles]];
        $data = User::where($args)->first();

        if ($data) {
            $hashedPassword = $data->password;
            // Hash::check($password, $hashedPassword)
            if (Hash::check($password, $hashedPassword)) {
                return response()->json(
                    ['success' => true, 'message' => 'Đăng nhập thành công', 'data' => $data],
                    200
                );
            } else {
                return response()->json(
                    ['success' => false, 'message' => 'Tài khoản hoặc mật khẩu sai'],
                    200
                );
            }
        }
        return response()->json(
            ['success' => false, 'message' => 'Tài khoản hoặc mật khẩu sai'],
            200
        );
    }
    public function show($id)
    {

        $data = User::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $data],
            200
        );
    }
    public function store(Request $request)
    {
        $args = [['email', '=', $request->email]];
        $args2 = [['username', '=', $request->username]];
        $data = User::where($args)->orWhere($args2)->get();
        if (count($data) > 0) {
            return response()->json(['success' => false, 'message' => 'Email hoặc username đã được đăng ký']);
        } else {
            $user = new User();
            $user->name = $request->name; //form
            $user->email = $request->email; //form
            $user->phone = $request->phone; //form
            //upload image


            $user->username = $request->username; //form
            $user->password = Hash::make($request->password); //form
            $user->address = $request->address; //form
            $user->roles = $request->roles; //form
            $user->created_at = date('Y-m-d H:i:s');
            $user->created_by = 1;
            $user->status = $request->status; //form
            $user->save(); //Luuu vao CSDL
            return response()->json(
                ['success' => true, 'message' => 'Thành công', 'data' => $user],
                201
            );
        }
    }
    public function update(Request $request, $id)
    {
        try {
            $user = User::find($id);
            $user->name = $request->name; //form
            $user->email = $request->email; //form
            $user->phone = $request->phone; //form
            $user->username = $request->username; //form
            $user->address = $request->address; //form
            $user->roles = $request->roles; //form
            $user->updated_at = date('Y-m-d H:i:s');
            $user->updated_by = 1;
            $user->status = $request->status; //form
            $user->save(); //Luuu vao CSDL
            return response()->json(
                ['success' => true, 'message' => 'Thành công', 'data' => $user],
                201
            );
        } catch (\Throwable $th) {
            return response()->json(
                ['success' => false, 'message' => 'Đã có lỗi xảy ra', 'data' => null],
                201
            );
        }
    }
    public function destroy($id)
    {
        $user = User::find($id);
        if ($user == null) {
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        if ($user->status == 0) {
            $user->delete();
        } else {
            $user->status = 0;
            $user->save();
        }

        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $user],
            200
        );
    }
}
