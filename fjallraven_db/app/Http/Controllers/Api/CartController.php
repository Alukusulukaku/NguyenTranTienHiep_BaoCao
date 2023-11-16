<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index($user_id)
    {
        $currentDate = Carbon::now();
        $data = Cart::with('product', 'product.brand', 'product.category')
            ->with(['product.productsale' => function ($query) use ($currentDate) {
                $query->where('date_begin', '<=', $currentDate)
                    ->where('date_end', '>=', $currentDate)
                    ->orWhereNull('date_begin')
                    ->orWhereNull('date_end')->orderBy('date_end', 'asc')
                    ->take(1);
            }])->whereHas('product.productstore')->with('product.productstore')->where('user_id', $user_id)->orderBy('updated_at', 'desc')->get();
        if (count($data) > 0) {
            return response()->json(
                ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data],
                200
            );
        } else {
            return response()->json(
                ['success' => false, 'message' => 'Không có dữ liệu', 'data' => null],
                200
            );
        }
    }
    public function store(Request $request)
    {
        $data = Cart::where([['product_id', '=', $request->product_id], ['user_id', '=', $request->user_id]])->first();

        if ($data) {
            $data->quantity = $data->quantity + $request->qty;
            $data->updated_at = date('Y-m-d H:i:s');
            $data->save();
            return response()->json(
                ['success' => true, 'message' => 'Thêm thành công', 'data' => $data],
                201
            );
        } else {
            $cart = new Cart();
            $cart->product_id = $request->product_id;
            $cart->user_id = $request->user_id;
            $cart->quantity = $request->qty;
            $cart->created_at = date('Y-m-d H:i:s');
            $cart->updated_at = date('Y-m-d H:i:s');
            $cart->save();
            return response()->json(
                ['success' => true, 'message' => 'Cập nhật thành công', 'data' => $data],
                201
            );
        }
    }
    public function update(Request $request)
    {

        $data = Cart::find($request->id);

        if ($data) {
            $data->quantity = $request->quantity;
            $data->updated_at = date('Y-m-d H:i:s');
            $data->save();
            return response()->json(
                ['success' => true, 'message' => 'Cập nhật thành công', 'data' => $data],
                201
            );
        }
    }
    public function destroy($id)
    {
        $cart = Cart::find($id);
        if ($cart) {
            $cart->delete();
            return response()->json(
                ['success' => true, 'message' => 'Xóa thành công thành công', 'data' => $cart],
                201
            );
        }
    }
}
