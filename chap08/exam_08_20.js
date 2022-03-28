// foo라는 식별자가 붙은 레이블 반복문
foo: {
    console.log(1);
    break foo;  // foo 레이블 반복문을 탈출한다.
    console.log(2);
}

console.log('Done!');

/*
1
Done!
 */
