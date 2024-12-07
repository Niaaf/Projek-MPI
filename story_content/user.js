function ExecuteScript(strId)
{
  switch (strId)
  {
      case "616AgH7BKtg":
        Script1();
        break;
      case "5gxNka1YO96":
        Script2();
        break;
      case "6L08ZrFvMgM":
        Script3();
        break;
      case "6LX0ZKy3ruH":
        Script4();
        break;
      case "6OEDQRUToWQ":
        Script5();
        break;
      case "6FM5Wxm95bC":
        Script6();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');

audio.volume = 0.0;
}

function Script2()
{
  var audio = document.getElementById('bgSong');

audio.volume = 0.3;
}

function Script3()
{
  var audio = document.getElementById('bgSong');

audio.volume = 0.5;
}

function Script4()
{
  var audio = document.getElementById('bgSong');

audio.volume = 0.7;
}

function Script5()
{
  var audio = document.getElementById('bgSong');

audio.volume = 0.9;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";

audio.load();

audio.play();

audio.volume=0.3;
}

