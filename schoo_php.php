<?php
// cookieを送信
// coolieにcountというタグで1というデータを送信する
// setcookie("count",1);

// $data = $_COOKIE["count"] + 1;
// setcookie("count",$data);

//cookieを期限付きで送信
//setcookie("name","jun",time() +3600);

//cookieを表示
//cookieからcountというタグのデータを取得する
//echo $_COOKIE["count"];
//echo $data;
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Schoo_php</title>
</head>
<body>
	<h1>サンプル</h1>
	<?php
	/**
	* 車をイメージ
	*/
	class Car //クラス名
	{
		public $color; //車の色
		public $tank_capacity; //タンク容量
		public $oil; //残ガソリン量
		function Run() //関数
		{
			$this->oil--;
		}
		function SetOil($data){
			$this->oil = $data
		}
		function GetOil(){
			return $this->oil;
		}
	}
	// $car1 = new Car();
	// $car1->color = "bule";
	// $car1->tank_capacity = 50;
	// $car1->oil = 5;
	// $car1->Run();
	// echo $car1->oil;

	/**
	* 継承
	*/
	class Truck extends Car //CarをTruckが継承
	{
		public $loadage; //積載量
		function Load() //積む関数
		{
			# code...
		}
		function UnLoad() //荷降ろし関数
		{
			# code...
		}
	}
	?>
</body>
</html>