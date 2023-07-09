function solution(str) {
    var splitFunc = str.split(""); //массив из строки
    var reverseFunc = splitFunc.reverse(""); //переворачиваем элементы в массиве
    var joinFunc = reverseFunc.join(""); //соединяем элементы массива
    return joinFunc; //возвращаем строку
}
solution("world");
