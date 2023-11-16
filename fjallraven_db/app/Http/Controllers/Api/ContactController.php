<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index($limit, $page=1)
    {
        $offset = ($page - 1) * $limit;
        $total_data = Contact::all();
        $data = Contact::offset($offset)
            ->limit($limit)->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data, 'total_data' => $total_data],
            200
        );
    }
    function show($id)
    {
        $data = Contact::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $data],
            200
        );
    }
    public function store(Request $request)
    {
        $contact = new Contact();
        $contact->name = $request->name; //form
        $contact->title = $request->title;
        $contact->email = $request->email;
        $contact->phone = $request->phone;
        $contact->content = $request->content;
        $contact->created_at = date('Y-m-d H:i:s');
        $contact->status = $request->status; //form
        $contact->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $contact],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $contact = Contact::find($id);
        $contact->updated_at = date('Y-m-d H:i:s');
        $contact->status = $request->status; //form
        $contact->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $contact],
            201
        );
    }
    public function destroy($id)
    {
        $contact = Contact::find($id);
        if ($contact == null) {
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $contact->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $contact],
            200
        );
    }
}