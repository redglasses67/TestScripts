

function OpenFolder(folderPath)
{
	return function()
	{
		var folder = new Folder(folderPath);
		folder.execute();
	}
}

function Main(testObjectArray)
{
	var dialog = new Window("dialog", "可変長ボタンテスト", undefined);

	var panel = dialog.add('panel', undefined, "フォルダーを開きます");
	panel.alignChildren = ["fill", "fill"];
	
	for (var i = 0; i < testObjectArray.length; i++)
	{
		var btn = panel.add("button", undefined, testObjectArray[i]["name"]);
		btn.onClick = OpenFolder(testObjectArray[i]["path"]);
	}

	dialog.show();
}

var testObject1 = {"name" : "Program Files", "path" : "C://Program Files"};
var testObject2 = {"name" : "Public Document", "path" : "C://Users//Public//Documents"};
var testObject3 = {"name" : "Windows", "path" : "C://Windows"};

Main([testObject1, testObject2, testObject3]);