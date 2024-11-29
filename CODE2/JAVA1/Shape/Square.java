
public class Square extends TwoDShape {
	double side;

	Square(double side) {
		this.side = side;
	}

	public void getArea() {
		System.out.println("Area of Square is: " + (side * side) + " Sq. Unit");
	}

	public void getPerimeter() {
		System.out.println("Perimeter of Square is: " + (side * 4) + " Unit");
	}
}
