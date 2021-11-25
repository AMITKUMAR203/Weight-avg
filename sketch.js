var weight=[55,60,72,75,80,35]
function setup() 
{
  weightavg()
  createCanvas(400,400);
}
function weightavg(){
  var sum=weight[0]+weight[1]+weight[2]+weight[3]+weight[4]+weight[5]
  var avg=sum/weight.length
  console.log(avg)
}
function draw() 
{
background(51);

}

