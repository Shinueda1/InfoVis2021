//Vec3 = function(x, y, z)
//{
//  this.x=x;
//  this.y=y;
//  this.z=z;
//}

//Vec3.prototype.add = function(v)
//{
//  this.x += v.x;
//  this.y += v.y;
//  this.z += v.z;
//  return this;
//}

//Vec3.prototype.sum = function()
//{
//  return this.x + this.y + this.z;
//}

class Vec3
{
  constructor(x,y,z)
  {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  min()
  {
    ver min = this.x;
    if (min >= this.y){
      min = this.y;
    }
    if(min >= this.z){
      min = this.z;
    }
    return min;
  }


  max(){
    ver max = this.x;
    if (max <= this.y){
      max = this.y;
    }
    if(max <= this.z){
      max = this.z;
    }
    return max;
  }

  mid(){
    if(this.min() == this.max())
    {
      return this.min();
    }
    else
    {
      ver max = this.max;
      ver min = this.min;
      ver v  = this.filter(n => (n != max)&&(n != min));
      return v;
    }
  }
}
