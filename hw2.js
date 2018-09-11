alert('please,do not judge strictly');
const a=100;
const b=99;
const c=10;
const d=3*3;
const e=17*5;
const f=900/10;
const DesiredGrade=100;
const User='Vika_CS110';
alert('Will you grade my homework as:'+ a + '?');
alert('Or at least:' + b);
alert('Do you realize that by clicking okay button, you just accepted my requests?')

if (User==='Vika_CS110' || User.length===10) {
	console.log('be ready, your grades are available...');
	if(DesiredGrade >= f+d && DesiredGrade <= a) {
	console.log('yay,Vic,you are a genius!'); 
} else if (DesiredGrade>=f && DesiredGrade<b) {
	console.log('Good job,but try a bit harder');
} else if (DesiredGrade<=89 && DesiredGrade>=78 ) {
	console.log('I think I should skip the upcoming party and revise the material...'); 
} else {
	console.log('I cannot accept a garde like this...Shame on me...');
}
} else { console.log('not this time,russian hacker... ');}

	

