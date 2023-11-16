<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\ProductImage;
use Illuminate\Support\Str;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index($status, $limit, $page = 1)
    {
        $args = [["status", "=", $status]];
        $offset = ($page - 1) * $limit;
        $total_data = Product::where($args)->get();
        $data = Product::where($args)->offset($offset)
            ->limit($limit)->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data, 'total_data' => $total_data],
            200
        );
    }

    public function getProducts($id, $limit)
    {
        $currentDate = Carbon::now();
        $args = [['status', '=', 1], ['category_id', '=', $id]];
        $data = Product::with('category', 'brand')->with(['productsale' => function ($query) use ($currentDate) {
            $query->where('date_begin', '<=', $currentDate)
                ->where('date_end', '>=', $currentDate)
                ->orWhereNull('date_begin')
                ->orWhereNull('date_end')->orderBy('date_end', 'asc')
                ->take(1);
        }])->whereHas('productstore')->with(['productstore' => function ($query) {
            $query->orderBy('qty', 'asc');
        }])->where($args)->limit($limit)->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data],
            200
        );
    }
    public function getSaleProducts($limit)
    {
        $currentDate = Carbon::now();
        $args = [['status', '=', 1]];
        $data = Product::with('category', 'brand')
            ->whereHas('productsale')
            ->with(['productsale' => function ($query) use ($currentDate) {
                $query->where('date_begin', '<=', $currentDate)
                    ->where('date_end', '>=', $currentDate)
                    ->orWhereNull('date_begin')
                    ->orWhereNull('date_end')
                    ->orderBy('date_end', 'asc')
                    ->take(1);
            }])
            ->whereHas('productstore')
            ->with(['productstore' => function ($query) {
                $query->orderBy('qty', 'asc');
            }])
            ->where($args)
            ->limit($limit)
            ->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data],
            200
        );
    }
    public function getTrendingProducts($limit)
    {
        $currentDate = Carbon::now();
        $args = [['status', '=', 1]];
        $data = Product::with('category', 'brand', 'orderdetail')
            ->with(['productsale' => function ($query) use ($currentDate) {
                $query->where('date_begin', '<=', $currentDate)
                    ->where('date_end', '>=', $currentDate)
                    ->orderBy('date_end', 'asc')
                    ->take(1);
            }])
            ->whereHas('orderdetail', function ($query) use ($args) {
                $query->whereHas('order', function ($query) use ($args) {
                    $query->where($args);
                });
            })
            ->withCount(['orderdetail as total_qty' => function ($query) {
                $query->select(DB::raw("SUM(qty)"));
            }])
            ->where($args)
            ->orderByDesc('total_qty')
            ->whereHas('productstore')
            ->with(['productstore' => function ($query) {
                $query->orderBy('qty', 'asc');
            }])
            ->where($args)
            ->limit($limit)
            ->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data],
            200
        );
    }
    public function getLatestProducts($limit)
    {
        $currentDate = Carbon::now();
        $args = [['status', '=', 1], [DB::raw('DATEDIFF( now(), created_at )'), '<=', 30]];
        $data = Product::with('category', 'brand')->with(['productsale' => function ($query) use ($currentDate) {
            $query->where('date_begin', '<=', $currentDate)
                ->where('date_end', '>=', $currentDate)
                ->orWhereNull('date_begin')
                ->orWhereNull('date_end')->orderBy('date_end', 'asc')
                ->take(1);
        }])->whereHas('productstore')->with(['productstore' => function ($query) {
            $query->orderBy('qty', 'asc');
        }])->where($args)->limit($limit)->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data],
            200
        );
    }
    public function test()
    {
        $data = Product::with('brand')->get();


        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data],
            200
        );
    }
    public function show($id)
    {
        $product = Product::with('category', 'brand', 'productstore', 'productsale')->find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $product],
            200
        );
    }

    public function productBySearch(Request $request)
    {
        if ($request->search == null) {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Không có',
                    'data' => null,
                ],
                200
            );
        }
        $offset = ($request->page - 1) * $request->limit;
        $currentDate = Carbon::now();
        if ($request->limit != -1 && $request->page != -1) {
            $products = Product::with('category', 'brand', 'productstore')->with(['productsale' => function ($query) use ($currentDate) {
                $query->where('date_begin', '<=', $currentDate)
                    ->where('date_end', '>=', $currentDate)
                    ->orWhereNull('date_begin')
                    ->orWhereNull('date_end')->orderBy('date_end', 'asc')
                    ->take(1);
            }])->where([['slug', 'like', '%' . $request->search . '%'], ['status', '=', 1]])
                ->orWhere([['name', 'like', '%' . $request->search . '%'], ['status', '=', 1]])->offset($offset)->limit($request->limit)->get();
        } else {
            $products = Product::with('category', 'brand', 'productstore')->with(['productsale' => function ($query) use ($currentDate) {
                $query->where('date_begin', '<=', $currentDate)
                    ->where('date_end', '>=', $currentDate)
                    ->orWhereNull('date_begin')
                    ->orWhereNull('date_end')->orderBy('date_end', 'asc')
                    ->take(1);
            }])->where([['slug', 'like', '%' . $request->search . '%'], ['status', '=', 1]])
                ->orWhere([['name', 'like', '%' . $request->search . '%'], ['status', '=', 1]])->get();
        }
        $products_total = Product::where([['slug', 'like', '%' . $request->search . '%'], ['status', '=', 1]])
            ->orWhere([['name', 'like', '%' . $request->search . '%'], ['status', '=', 1]])->get();
        $total_page = ceil(count($products_total) / $request->limit * 1);
        if (count($products) > 0) {
            return response()->json(
                [
                    'success' => true,
                    'message' => 'Tải dữ liệu thành công',
                    'data' => $products,
                    'total_data' =>  $products_total,
                    'total_page' => $total_page
                ],
                200
            );
        }
        return response()->json(
            [
                'success' => false,
                'message' => 'Không có',
                'data' => null,
                'total_data' =>  null
            ],
            200
        );
    }



    public function getProductBySlug($category, $slug)
    {
        $category = Category::where('slug', $category)->first();
        $args = [['slug', '=', $slug], ['category_id', '=', $category->id]];
        $currentDate = Carbon::now();
        $product = Product::with('brand', 'category', 'productimage', 'review')->with(['productsale' => function ($query) use ($currentDate) {
            $query->where('date_begin', '<=', $currentDate)
                ->where('date_end', '>=', $currentDate)
                ->orWhereNull('date_begin')
                ->orWhereNull('date_end')->orderBy('date_end', 'asc')
                ->take(1);
        }])->whereHas('productstore')->with(['productstore' => function ($query) {
            $query->orderBy('qty', 'asc');
        }])->where($args)->first();
        $args1 = [['category_id', '=', $category->id]];
        $products_related = Product::where($args1)->whereNotIn('id', [$product->id])->get();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $product, 'other_data' => $products_related],
            200
        );
    }

    public function filterProductsPagination($page = 1, $limit, Request $request)
    {
        $listcat = [];
        $category = Category::when($request->child === "all", function ($query) use ($request) {
            $query->where('slug', $request->parent);
        })->when($request->child !== "all", function ($query) use ($request) {
            $query->where('slug', $request->child);
        })->where('status', 1)->first();

        $listcat[] = $category->id;
        if ($request->child == "all") {
            foreach ($category->children as $s1) {
                $listcat[] = $s1->id;
            }
        }

        $offset = ($page - 1) * $limit;
        $brands = json_decode($request->brands);
        $currentDate = date('Y-m-d');


        if (count($brands) != 0) {
            if ($request->min >= 0 && $request->max != 0) {
                $products = Product::with('brand', 'category')->with(['productsale' => function ($query) use ($currentDate) {
                    $query->where('date_begin', '<=', $currentDate)
                        ->where('date_end', '>=', $currentDate)
                        ->orWhereNull('date_begin')
                        ->orWhereNull('date_end')->orderBy('date_end', 'asc')
                        ->take(1);
                }])->whereHas('productstore')->with(['productstore' => function ($query) {
                    $query->orderBy('qty', 'asc');
                }])->where('status', 1)->whereIn('category_id', $listcat)->whereBetween('price', array($request->min, $request->max))->whereIn('brand_id', $brands)->offset($offset)->limit($limit)->get();
                $products_all = Product::where('status', 1)->whereHas('productstore')->with(['productstore' => function ($query) {
                    $query->orderBy('qty', 'asc');
                }])->whereBetween('price', array($request->min, $request->max))->whereIn('category_id', $listcat)->whereIn('brand_id', $brands)->get();
            } else {
                $products = Product::with('brand', 'category')->with(['productsale' => function ($query) use ($currentDate) {
                    $query->where('date_begin', '<=', $currentDate)
                        ->where('date_end', '>=', $currentDate)
                        ->orWhereNull('date_begin')
                        ->orWhereNull('date_end')->orderBy('date_end', 'asc')
                        ->take(1);
                }])->whereHas('productstore')->with(['productstore' => function ($query) {
                    $query->orderBy('qty', 'asc');
                }])->where('status', 1)->whereIn('category_id', $listcat)->whereIn('brand_id', $brands)->offset($offset)->limit($limit)->get();
                $products_all = Product::where('status', 1)->whereHas('productstore')->with(['productstore' => function ($query) {
                    $query->orderBy('qty', 'asc');
                }])->whereIn('category_id', $listcat)->whereIn('brand_id', $brands)->get();
            }

            $total_page = ceil(count($products_all) / $limit * 1);
        } else {
            if ($request->min >= 0 && $request->max != 0) {
                $products = Product::with('brand', 'category')->with(['productsale' => function ($query) use ($currentDate) {
                    $query->where('date_begin', '<=', $currentDate)
                        ->where('date_end', '>=', $currentDate)
                        ->orWhereNull('date_begin')
                        ->orWhereNull('date_end')->orderBy('date_end', 'asc')
                        ->take(1);
                }])->whereHas('productstore')->with(['productstore' => function ($query) {
                    $query->orderBy('qty', 'asc');
                }])->where('status', 1)->whereBetween('price', array($request->min, $request->max))->whereIn('category_id', $listcat)->offset($offset)->limit($limit)->get();
                $products_all = Product::where('status', 1)->whereHas('productstore')->with(['productstore' => function ($query) {
                    $query->orderBy('qty', 'asc');
                }])->whereBetween('price', array($request->min, $request->max))->whereIn('category_id', $listcat)->get();
            } else {
                $products = Product::with('brand', 'category')->with(['productsale' => function ($query) use ($currentDate) {
                    $query->where('date_begin', '<=', $currentDate)
                        ->where('date_end', '>=', $currentDate)
                        ->orWhereNull('date_begin')
                        ->orWhereNull('date_end')->orderBy('date_end', 'asc')
                        ->take(1);
                }])->whereHas('productstore')->with(['productstore' => function ($query) {
                    $query->orderBy('qty', 'asc');
                }])->where('status', 1)->whereIn('category_id', $listcat)->offset($offset)->limit($limit)->get();
                $products_all = Product::where('status', 1)->whereHas('productstore')->with(['productstore' => function ($query) {
                    $query->orderBy('qty', 'asc');
                }])->whereIn('category_id', $listcat)->get();
            }

            $total_page = ceil(count($products_all) / $limit * 1);
        }


        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $products, 'data_total' => $products_all, 'total_page' => $total_page],
            200
        );
    }
    public function filterProducts(Request $request)
    {
        $listcat = array();
        if ($request->category != 0) {
            $category = Category::where([['id', '=', $request->category], ['status', '=', 1]])->first();
            array_push($listcat, $category->id);
            $cat_child = $category->children;
            if (count($cat_child) != null) {
                foreach ($cat_child as $child) {
                    array_push($listcat, $child->id);
                }
            }
            if ($request->brand != 0)
                $products = Product::whereIn('category_id', $listcat)
                    ->where([['brand_id', '=', $request->brand], ['status', '=', 1], ['slug', 'like', '%' . $request->search . '%']])
                    ->where([['brand_id', '=', $request->brand], ['status', '=', 1],  ['name', 'like', '%' . $request->search . '%']])
                    ->get();
            else
                $products = Product::whereIn('category_id', $listcat)
                    ->where([['status', '=', 1], ['slug', 'like', '%' . $request->search . '%']])
                    ->where([['status', '=', 1], ['name', 'like', '%' . $request->search . '%']])
                    ->get();
        } else {
            if ($request->brand != 0)
                $products = Product::where([['status', '=', 1], ['brand_id', $request->brand], ['slug', 'like', '%' . $request->search . '%']])
                    ->where([['status', '=', 1], ['brand_id', '=', $request->brand], ['name', 'like', '%' . $request->search . '%']])
                    ->get();
            else
                $products = Product::where([['status', '=', 1], ['slug', 'like', '%' . $request->search . '%']])
                    ->where([['status', 1], ['name', 'like', '%' . $request->search . '%']])
                    ->get();
        }

        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $products],
            200
        );
    }
    public function store(Request $request)
    {

        $test = Str::of($request->name)->slug('-');
        $args = [['slug', '=', $test]];
        $check = Product::where($args)->get();
        if (count($check) > 0) {
            return response()->json(
                ['success' => false, 'message' => 'Dữ liệu đã tồn tại'],
                201
            );
        } else {
            $product = new Product();
            $product->name = $request->name; //form
            $product->slug = Str::of($request->name)->slug('-');
            //upload image
            $files = $request->image;
            if ($files != null) {
                $extension = $files->getClientOriginalExtension();
                if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg', 'svg'])) {
                    $filename = $product->slug . '.' . $extension;
                    $product->image = $filename;
                    $files->move(public_path('images/product'), $filename);
                }
            }

            $files1 = $request->back_image;
            if ($files1 != null) {
                $extension1 = $files1->getClientOriginalExtension();
                if (in_array($extension1, ['jpg', 'png', 'gif', 'webp', 'jpeg', 'svg'])) {
                    $filename1 = $product->slug . '_back' . '.' . $extension1;
                    $product->back_image = $filename1;
                    $files1->move(public_path('images/product_back'), $filename1);
                }
            }
            $product->price = $request->price; //form
            $product->metakey = $request->metakey; //form
            $product->metadesc = $request->metadesc; //form
            $product->description = $request->description; //form
            $product->created_at = date('Y-m-d H:i:s');
            $product->created_by = 1;
            $product->status = $request->status; //form
            $product->brand_id = $request->brand_id;
            $product->category_id = $request->category_id;
            $product->save(); //Luuu vao CSDL

            $images = $request->images;
            if (count($images) != 0) {
                foreach ($images as $img) {
                    $files2 = $img;
                    $randomNumber = random_int(0, 99999);
                    $product_img = new ProductImage();
                    $product_img->product_id = $product->id;
                    $extension = $files2->getClientOriginalExtension();
                    if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg', 'svg'])) {
                        $filename = $product->slug . "_" . $randomNumber . '.' . $extension;
                        $product_img->image = $filename;
                        $files2->move(public_path('images/productImg'), $filename);
                    }
                    $product_img->save();
                }
            }
            return response()->json(
                ['success' => true, 'message' => 'Thêm dữ liệu thành công', 'data' => $product],
                201
            );
        }
    }
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->name = $request->name; //form
        $product->slug = Str::of($request->name)->slug('-');
        //upload image
        $files = $request->image;
        if ($files != null) {
            if (is_file(public_path('images/product/' . $product->image))) {

                unlink(public_path('images/product/' . $product->image));
            }
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg', 'svg'])) {
                $filename = $product->slug . '.' . $extension;
                $product->image = $filename;
                $files->move(public_path('images/product'), $filename);
            }
        }

        $files1 = $request->back_image;
        if ($files1 != null) {
            if (is_file(public_path('images/product_back/' . $product->back_image))) {

                unlink(public_path('images/product_back/' . $product->back_image));
            }
            $extension1 = $files1->getClientOriginalExtension();
            if (in_array($extension1, ['jpg', 'png', 'gif', 'webp', 'jpeg', 'svg'])) {
                $filename1 = $product->slug . '.' . $extension1;
                $product->back_image = $filename1;
                $files1->move(public_path('images/product_back'), $filename1);
            }
        }


        $product->brand_id = $request->brand_id; //form
        $product->price = $request->price; //form
        $product->category_id = $request->category_id; //form
        $product->metakey = $request->metakey; //form
        $product->metadesc = $request->metadesc; //form
        $product->description = $request->description; //form
        $product->updated_at = date('Y-m-d H:i:s');
        $product->updated_by = $request->user_id;
        $product->status = $request->status; //form

        $product->save(); //Luuu vao CSDL
        $images = $request->images;
        if (count($images) != 0) {
            $productimg = ProductImage::where('product_id', $id)->get();
            if (count($productimg) > 0) {
                foreach ($productimg as $item) {
                    if (is_file(public_path('images/productImg/' . $item->image))) {

                        unlink(public_path('images/productImg/' . $item->image));
                        $item->delete();
                    }
                }
                foreach ($images as $img) {
                    $files2 = $img;
                    $randomNumber = random_int(0, 99999);
                    $product_img = new ProductImage();
                    $product_img->product_id = $id;
                    $extension = $files2->getClientOriginalExtension();
                    if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg', 'svg'])) {
                        $filename = $product->slug . "_" . $randomNumber . '.' . $extension;
                        $product_img->image = $filename;
                        $files2->move(public_path('images/productImg'), $filename);
                    }
                    $product_img->save();
                }
            }
        }


        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $product],
            201
        );
    }
    public function destroy($id)
    {
        $product = Product::find($id);
        if ($product == null) {
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        if ($product->status != 0) {
            $product->status = 0;
            $product->save();

            return response()->json(
                ['success' => true, 'message' => 'Thành công', 'data' => $product],
                200
            );
        }
        if (is_file(public_path('images/product_back/' . $product->back_image))) {

            unlink(public_path('images/product_back/' . $product->back_image));
        }
        $productimg = ProductImage::where('product_id', $id);
        foreach ($productimg as $item) {
            if (is_file(public_path('images/productImg/' . $item->image))) {

                unlink(public_path('images/productImg/' . $item->image));
            }
        }
        $productimg->delete();
        $product->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $product],
            200
        );
    }
}