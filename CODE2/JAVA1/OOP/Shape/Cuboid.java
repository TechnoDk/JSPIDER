
public class Cuboid extends ThreeDShape {
	double length;
	double width;
	double height;

	Cuboid(double length, double width, double height) {
		this.length = length;
		this.width = width;
		this.height = height;
	}

	public void getVolume() {
		System.out.println("Volume of Cuboid is: " + (length * width * height) + " cubic unit");
	}

	public void getTSA() {
		System.out.println("Total Surface Area of Cuboid is: "
				+ (2 * ((length * width) + (width * height) + (length * height))) + " Sq. Unit");
	}

	public void getLSA() {
		System.out.println("Lateral Surface Area of Cuboid is: " + (2 * (length + width) * height) + " Sq. Unit");
	}
}
