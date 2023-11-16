<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProductSale;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ProductSaleController extends Controller
{
    public function store(Request $request)
    {
        $products = json_decode($request->products);
        foreach ($products as $product) {
            $sales = new ProductSale();
            $sales->product_id = $product->id;
            $sales->pricesale = $product->pricesale;
            $sales->qty = $product->qty;
            $date_begin = Carbon::parse($product->startDate)->format('Y-m-d H:i:s');
            $sales->date_begin = $date_begin;
            $date_end = Carbon::parse($product->endDate)->format('Y-m-d H:i:s');
            $sales->date_end = $date_end;
            $sales->created_at = date('Y-m-d H:i:s');
            $sales->created_by = 1;
            $sales->save();
        }
        return response()->json(
            ['success' => true, 'message' => 'Thêm thành công'],
            201
        );
    }
    public function destroy($id)
    {
        $sales = ProductSale::find($id);
        $sales->delete();
        return response()->json(
            ['success' => true, 'message' => 'Xóa thành công', 'data' => $sales],
            201
        );
    }
}