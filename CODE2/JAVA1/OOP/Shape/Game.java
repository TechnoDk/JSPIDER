
import java.util.*;

public class Game {
	Game() {
		System.out.println("===Game Start===");
	}

	/*
	 * public Shape selectShape() {
	 * Scanner sc = new Scanner(System.in);
	 * System.out.println("Welcome to Shape Game");
	 * System.out.println("Press 1 for 2D Shape");
	 * System.out.println("Press 2 for 3D Shape");
	 * 
	 * System.out.print("Enter your Choice: ");
	 * int choice = sc.nextInt();
	 * 
	 * if(choice == 1) {
	 * System.out.println("You have selected 2D Shape");
	 * TwoDShape two_d = selectTwoDShape();
	 * two_d.getArea();
	 * two_d.getPerimeter();
	 * return two_d;
	 * }
	 * else if(choice == 2) {
	 * System.out.println("You hace selected 3D Shape");
	 * ThreeDShape three_d = selectThreeDShape();
	 * three_d.getVolume();
	 * three_d.getTSA();
	 * three_d.getLSA();
	 * return three_d;
	 * }
	 * else {
	 * System.out.println("Invalid choice");
	 * return selectShape();
	 * }
	 * }
	 */
	public int selectShape() {
		Scanner sc = new Scanner(System.in);
		System.out.println("Welcome to Shape Game");
		System.out.println("Press 1 for 2D Shape");
		System.out.println("Press 2 for 3D Shape");

		System.out.print("Enter your Choice: ");
		int choice = sc.nextInt();
		if (choice == 1)
			return 1;
		else if (choice == 2)
			return 2;
		else
			return selectShape();
	}

	public TwoDShape selectTwoDShape() {
		Scanner sc = new Scanner(System.in);
		System.out.println("Press 1 for Circle");
		System.out.println("Press 2 for Rectangle");
		System.out.println("Press 3 for Square");
		System.out.println("Press 4 for Triangle");

		System.out.print("Enter your Choice: ");
		int choice = sc.nextInt();

		if (choice == 1) {
			System.out.println("You have selected Circle");
			System.out.print("Enter the Radius of Circle: ");
			double radius = sc.nextDouble();

			Circle c = new Circle(radius);
			return c;
		} else if (choice == 2) {
			System.out.println("You have selected Rectangle");
			System.out.print("Enter the Length of Rectangle: ");
			double length = sc.nextDouble();
			System.out.print("Enter the Width of Rectangle: ");
			double width = sc.nextDouble();
			Rectangle r = new Rectangle(length, width);
			return r;
		} else if (choice == 3) {
			System.out.println("You have selected Square");
			System.out.print("Enter the Side of Square: ");
			double side = sc.nextDouble();

			Square s = new Square(side);
			return s;
		} else if (choice == 4) {
			System.out.println("You have selected Triangle");
			System.out.print("Enter the 1st side of Triangle: ");
			double a = sc.nextDouble();
			System.out.print("Enter the 2nd side of Triangle: ");
			double b = sc.nextDouble();
			System.out.print("Enter the 3rd side of Triangle: ");
			double c = sc.nextDouble();

			Triangle t = new Triangle(a, b, c);
			return t;
		} else {
			System.out.println("Invalid choice");
			return selectTwoDShape();
		}
	}

	public ThreeDShape selectThreeDShape() {
		Scanner sc = new Scanner(System.in);
		System.out.println("Press 1 for Cube");
		System.out.println("Press 2 for Cuboid");
		System.out.println("Press 3 for Cylinder");
		System.out.println("Press 4 for Sphere");

		System.out.print("Enter your Choice: ");
		int choice = sc.nextInt();

		if (choice == 1) {
			System.out.println("Your have Selected Cube");
			System.out.print("Enter the Side of cube: ");
			double side = sc.nextDouble();
			Cube c = new Cube(side);
			return c;
		} else if (choice == 2) {
			System.out.println("Your have Selected Cuboid");
			System.out.print("Enter the Length of Cuboid: ");
			double length = sc.nextDouble();
			System.out.print("Enter the Width of Cuboid: ");
			double width = sc.nextDouble();
			System.out.print("Enter the Height of Cuboid: ");
			double height = sc.nextDouble();

			Cuboid c = new Cuboid(length, width, height);
			return c;
		} else if (choice == 3) {
			System.out.println("Your have Selected Cylinder");
			System.out.print("Enter the Radius of Cylinder: ");
			double radius = sc.nextDouble();
			System.out.print("Enter the Height of Cylinder: ");
			double height = sc.nextDouble();

			Cylinder c = new Cylinder(radius, height);
			return c;
		} else if (choice == 4) {
			System.out.println("Your have Selected Sphere");
			System.out.print("Enter the Radius of Sphere: ");
			double radius = sc.nextDouble();

			Sphere s = new Sphere(radius);
			return s;
		} else {
			System.out.println("Invalid Choice");
			return selectThreeDShape();
		}
	}
}
