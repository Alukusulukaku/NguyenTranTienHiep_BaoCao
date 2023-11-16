<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProductStore;
use Illuminate\Http\Request;

class ProductStoreController extends Controller
{
    public function storeUpdate(Request $request)
    {
        $products = json_decode($request->products);
        foreach ($products as $product) {
            $found = ProductStore::where('product_id', $product->id)->first();
            if ($found != null) {
                $found->price = $product->price;
                $found->qty = $found->qty + $product->qty;
                $found->updated_at = date('Y-m-d H:i:s');
                $found->updated_by = 1;
                $found->save();
            } else {
                $sales = new ProductStore();
                $sales->product_id = $product->id;
                $sales->price = $product->price;
                $sales->qty = $product->qty;
                $sales->created_at = date('Y-m-d H:i:s');
                $sales->created_by = 1;
                $sales->save();
            }
        }
        return response()->json(
            ['success' => true, 'message' => 'Thêm thành công'],
            201
        );
    }
}