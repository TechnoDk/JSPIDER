
public class Cylinder extends ThreeDShape {
	double radius;
	double height;

	Cylinder(double radius, double height) {
		this.radius = radius;
		this.height = height;
	}

	public void getVolume() {
		System.out.println("Volume of Cylinder is: " + (Math.pow(Math.PI, 2) * radius * height) + " cubic unit");
	}

	public void getTSA() {
		System.out.println(
				"Total Surface Area of Cylinder is: " + (2 * Math.PI * radius * (radius + height)) + " Sq. Unit");
	}

	public void getLSA() {
		System.out.println("Lateral Surface Area of Cube is: " + (2 * Math.PI * radius * height) + " Sq. Unit");
	}
}
