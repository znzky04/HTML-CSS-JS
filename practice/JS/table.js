//新增数据函数
function addData() {
    var table = document.getElementById("table");
    console.log(table);
    //获取表格的行数（插入位置）
    var length = table.rows.length;

    //插入行
    var newRow = table.insertRow(length);
    
    //插入列
    var newCell = newRow.insertCell(0);
    var newAge = newRow.insertCell(1);
    var newAction = newRow.insertCell(2);

    //插入数据
    newCell.innerHTML = "长崎素食";
    newAge.innerHTML = "1919810";
    newAction.innerHTML = '<button onclick="deleteData(this)">删除</button> <button onclick="editData(this)">修改</button>';
}

//删除数据函数
function deleteData(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

//编辑数据函数
function editData(button) {
    var row = button.parentNode.parentNode;
    var cell = row.cells[0];
    var age = row.cells[1];

    var inputName = prompt("请输入新的名称");
    var inputAge = prompt("请输入新的年龄");

    cell.innerHTML = inputName;
    age.innerHTML = inputAge;
    
    // cell.innerHTML = '<input type="text" value="' + cell.innerHTML + '">';
    // age.innerHTML = '<input type="text" value="' + age.innerHTML + '">';
}