
public class Triangle extends TwoDShape {
	double a;
	double b;
	double c;

	Triangle(double a, double b, double c) {
		if (a + b > c && a + c > b && b + c > a) {
			this.a = a;
			this.b = b;
			this.c = c;
		} else
			System.out.println("Invalid Side of Triange");
	}

	public void getArea() {
		double s = (a + b + c) / 2;
		double area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
		System.out.println("Area of Triangle is: " + area + " Sq. Unit");
	}

	public void getPerimeter() {
		System.out.println("Perimeter of Triangle is: " + (a + b + c) + " Unit");
	}
}
