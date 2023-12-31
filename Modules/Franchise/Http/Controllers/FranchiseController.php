<?php

namespace Modules\Franchise\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Mail;
use App\Model\EmailNotification;
use App\Model\Franchise;
class FranchiseController extends Controller
{
    public function rand_string($digits) {
        $alphanum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz" . time();
        $rand = substr(str_shuffle($alphanum), 0, $digits);
        return $rand;
    }

    public function rand_number($digits) {
        $alphanum = "123456789" . time();
        $rand = substr(str_shuffle($alphanum), 0, $digits);
      	
        return $rand;
    }
	
	function get_user_ip() {
		if (!empty($_SERVER["HTTP_CLIENT_IP"])) {
			//check for ip from share internet
			$ip = $_SERVER["HTTP_CLIENT_IP"];
		} elseif (!empty($_SERVER["HTTP_X_FORWARDED_FOR"])) {
			// Check for the Proxy User
			$ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
		} else {
			$ip = $_SERVER["REMOTE_ADDR"];
		}
		return $ip;
	}
	
	public function SendMail($data) {
        $template = view('franchise::mail.layouts.template')->render();
        $content = view('franchise::mail.' . $data['template'], $data['data'])->render();
        
        $view = str_replace('[[email_message]]', $content, $template);
        $data['content'] = $view;
//        $headers = "MIME-Version: 1.0" . "\r\n";
//        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
//        $headers .= 'From: admin@laravel.com' . "\r\n" .
//                'Reply-To: no-reply@laravel.com' . "\r\n" .
//                'X-Mailer: PHP/' . phpversion();
//        $va = str_replace('[[email_message]]', $content, $template);
//        return mail($data['to'], $data['subject'], $va, $headers);
        Mail::send([], [], function ($message) use ($data) {
            $message->from(env('MAIL_USERNAME', 'info@ditechnical.in'), env('PROJECT_NAME', 'Ditechnical'));
            $message->replyTo(env('MAIL_USERNAME', 'no-reply@ditechnical.in'), env('PROJECT_NAME', 'Ditechnical'));
            $message->subject($data['subject']);
            $message->setBody($data['content'], 'text/html');
            $message->to($data['to']);
        });
    }

    public function get_email_data($slug, $replacedata = array()) {
        $email_data = EmailNotification::where(['email_code' => $slug])->first();
        $email_msg = "";
        $email_array = array();
        $email_msg = $email_data->body;
        $subject = $email_data->subject;
        if (!empty($replacedata)) {
            foreach ($replacedata as $key => $value) {
                $email_msg = str_replace("{{" . $key . "}}", $value, $email_msg);
            }
        }
        return array('body' => $email_msg, 'subject' => $subject);
    }
    
    public function days_left_cron(Request $request) {
        $data = [];
        $franchises = Franchise::where('days_left','>','0')->get();
        
        // echo "<pre>";print_r($franchises);
        
        foreach($franchises as $franchise){
            if($franchise['days_left'] > '0'){
                $franchise['days_left'] = $franchise['days_left'] - 1;
                $fran = Franchise::findorFail($franchise['id']);
                $fran->days_left = $franchise['days_left'];
                $fran->save();
                echo "plan days reduce.";
            }
        }
        
        exit;
    }
}
