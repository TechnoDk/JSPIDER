
public class Cube extends ThreeDShape {
	double side;

	Cube(double side) {
		this.side = side;
	}

	public void getVolume() {
		System.out.println("Volume of Cube is: " + Math.pow(side, 3) + " cubic unit");
	}

	public void getTSA() {
		System.out.println("Total Surface Area of Cube is: " + (6 * side * side) + " Sq. Unit");
	}

	public void getLSA() {
		System.out.println("Lateral Surface Area of Cube is: " + (4 * side * side) + " Sq. Unit");
	}
}
