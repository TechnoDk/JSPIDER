

public class Circle extends TwoDShape{
	double radius;
	
	Circle(double radius){
		this.radius=radius;
	}
	
	public void getArea() {
		System.out.println("Area of Circle is: "+(Math.PI*radius*radius)+" Sq. Unit");
	}
	public void getPerimeter() {
		System.out.println("Perimeter of Circle is: "+(2*Math.PI*radius)+" Unit");
	}
}
