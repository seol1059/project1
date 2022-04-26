function count(type) {
    // 결과를 표시할 element
    const resultElement = document.getElementById('result');

    // 현재 화면에 표시된 값
    let number = resultElement.innerText;

    // 더하기/빼기
    if (type === 'plus') {
        if(number>9){
            alert('수량 10 개 이상 초과 구매 불가');
            number=10;
        }else{
            number = parseInt(number) + 1;
        }
    } else if (type === 'minus') {
        if(number<2){
            alert('수량 1 개 이상 구매 가능');
            number=1;
        }else{
            number = parseInt(number) - 1;
        }
    }

    // 결과 출력
    resultElement.innerText = number;
}