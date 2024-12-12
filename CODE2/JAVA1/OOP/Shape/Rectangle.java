
public class Rectangle extends TwoDShape {
	double length;
	double width;

	Rectangle(double length, double width) {
		this.length = length;
		this.width = width;
	}

	public void getArea() {
		System.out.println("Area of Rectangle is: " + (length * width) + " Sq. Unit");
	}

	public void getPerimeter() {
		System.out.println("Perimeter of Rectangle is: " + (2 * (length + width)) + " Unit");
	}
}
