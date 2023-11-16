<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Product;
use App\Models\ProductSale;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function index(Request $request, $limit, $page = 1)
    {
        $offset = ($page - 1) * $limit;
        $args = [['status', '=', $request->status]];

        $total_data = Order::where($args)->get();
        $data = Order::where($args)->offset($offset)
            ->limit($limit)->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data, 'total_data' => $total_data],
            200
        );
    }
    function show($id)
    {
        $data = Order::with('orderdetail', 'orderdetail.product')->find($id);


        return response()->json(
            [
                'success' => true,
                'message' => 'thành công',
                'data' => $data,

            ],
            200
        );
    }
    function store(Request $request)
    {
        try {
            DB::beginTransaction();
            $order = new Order();
            $order->user_id = $request->user_id;
            $order->name = $request->name;
            $order->phone = $request->phone;
            $order->email = $request->email;
            $order->address = $request->address;
            $order->note = $request->note;
            $order->created_at = date('Y-m-d H:i:s');
            $order->status = 2;
            $order->save();

            $cart = Cart::where('user_id', $request->user_id)->get();
            $currentDate = date('Y-m-d H:i:s');
            foreach ($cart as $cart_item) {
                $orderdetail = new OrderDetail();
                $orderdetail->order_id = $order->id;
                $product = Product::find($cart_item->product_id);
                $productsale = ProductSale::where('date_begin', '<=', $currentDate)
                    ->where('date_end', '>=', $currentDate)
                    ->where('product_id', '=', $product->id)
                    ->orderBy('date_end', 'asc')
                    ->first();
                $orderdetail->product_id = $product->id;
                $orderdetail->qty = $cart_item->quantity;
                if ($productsale) {
                    $orderdetail->price = $productsale->pricesale;
                } else {
                    $orderdetail->price = $product->price;
                }
                $orderdetail->save();
            }
            DB::commit();
            return response()->json(
                ['success' => true, 'message' => 'Thành công', 'data' => $order],
                201
            );
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json(
                ['success' => false, 'message' => 'Thất bại', 'data' => $order],
                201
            );
        }
    }
    public function update($id)
    {
        $order = Order::find($id + 0);
        if ($order == null) {
            return response()->json(
                ['success' => false, 'message' => 'Không thành công, đơn hàng không tồn tại', 'data' => null],
                404
            );
        }
        try {
            $order->status = 1;
            $order->save();
            return response()->json(
                ['success' => true, 'message' => 'Xác nhận đơn hàng đã giao thành công.', 'data' => $order],
                200
            );
        } catch (\Throwable $th) {
            return response()->json(
                ['success' => false, 'message' => 'Đã có lỗi xảy ra.', 'data' => null],
                200
            );
        }
    }
    public function destroy($id)
    {
        $order = Order::find($id + 0);
        if ($order == null) {
            return response()->json(
                ['success' => false, 'message' => 'Không thành công, đơn hàng không tồn tại', 'data' => null],
                404
            );
        }
        try {
            $order->status = 0;
            $order->save();
            return response()->json(
                ['success' => true, 'message' => 'Hủy đơn hàng thành công.', 'data' => $order],
                200
            );
        } catch (\Throwable $th) {
            return response()->json(
                ['success' => false, 'message' => 'Đã có lỗi xảy ra.', 'data' => null],
                200
            );
        }
    }
}
