public class TriangleArea {
    public static void main(String[] args) {
        double side1 = 3, side2 = 4, side3 = 5;
        double semiPerimeter = (side1 + side2 + side3) / 2;
        double area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
        System.out.println("Area of triangle: " + area);
    }
}
