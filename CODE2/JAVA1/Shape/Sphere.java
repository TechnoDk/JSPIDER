
public class Sphere extends ThreeDShape {
	double radius;

	Sphere(double radius) {
		this.radius = radius;
	}

	public void getVolume() {
		System.out.println("Volume of Sphere is: " + ((4 * Math.PI * Math.pow(radius, 3)) / 3) + " cubic unit");
	}

	public void getTSA() {
		System.out.println("Total Surface Area of Sphere is: " + (4 * Math.PI * radius * radius) + " Sq. Unit");
	}

	public void getLSA() {
		System.out.println("Lateral Surface Area of Sphere is: None");
	}
}
