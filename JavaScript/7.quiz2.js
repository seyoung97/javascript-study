// 정직원과 파타임직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employees {
    constructor(name, department, hoursPerMonth, payRate){
        this.name = name
        this.department = department
        this.hoursPerMonth=hoursPerMonth
        this.payRate=payRate
    }
    calculatePay(){
        return this.hoursPerMonth * this.payRate
    }
}

class PartTime extends Employees {
    static PAY_RATE = 8000
    // 그냥 숫자를 전달하면 가독성이 안좋음 
    // 상수 변수를 만들어서 전달하는게 좋음
    constructor(name, department, hoursPerMonth){
        super(name, department, hoursPerMonth, PartTime.PAY_RATE)     
    }
    
}

class FullTime extends Employees {
    static PAY_RATE = 10000
    constructor(name, department, hoursPerMonth){
        super(name, department, hoursPerMonth, FullTime.PAY_RATE)     
    }
}

const Joey = new FullTime('Joey', 's/w', 30)
const Bob = new PartTime('Bob', 's/w', 20)
console.log(Joey.calculatePay());
console.log(Bob.calculatePay());
