//新增数据函数
function addrow(){
    var table = document.getElementById('table');
    var length = table.rows.length;
    var newrow = table.inertRow(length);
    var documentcol = newrow.insertCell(0);
    var namecol = newrow.insertCell(1);
    var phonecol = newrow.insertCell(2);
    var actioncol = newrow.inertRow(3);
    documentcol.innerHTML = '未知';
    namecol.innerHTML = '未知';
    phonecol.innerHTML = '未知';
    actioncol.innerHTML = '未知';
}