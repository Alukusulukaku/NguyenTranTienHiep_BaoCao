<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    function store(Request $request)
    {
        try {
            $review = new Review();
            $review->product_id = $request->product_id; //form
            $review->user_id = $request->user_id;
            $review->title = $request->title;
            $review->comment = $request->comment;
            $review->rating = $request->rating;
            $review->created_at = date('Y-m-d H:i:s');
            $review->save(); //Luuu vao CSDL
            return response()->json(
                ['success' => true, 'message' => 'Thành công', 'data' => $review],
                201
            );
        } catch (\Throwable $th) {
            return response()->json(
                ['success' => false, 'message' => 'Thất bại', 'data' => null],
                201
            );
        }
    }
    public function getReviewsByProductId($id)
    {
        $reviews = Review::with('user')->where('product_id', $id)->get();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $reviews],
            201
        );
    }
    public function destroy($id)
    {
        $review = Review::find($id);
        $review->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $review],
            200
        );
    }
}
