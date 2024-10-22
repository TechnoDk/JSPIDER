import java.util.Scanner;
import java.math.*;

public class circle {

    double radius;

    public void setValue() {
        // this.radius = radius;
        // }
        Scanner sc = new Scanner(System.in);
        radius = sc.nextDouble();
    }

    public void getDetails() {
        System.out.println("+--------+----------+-----------+");
        System.out.println("Radius is :- " + radius);
        System.out.println("Area is:- " + Math.PI * (radius * radius));
        System.out.println("Parameter is :- " + 2 * Math.PI * radius);
        System.out.println("+---------+--------+-----------+");
    }
}
