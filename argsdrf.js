public class LCM {
    public static void main(String[] args) {
        int num1 = 12, num2 = 20;
        int lcm = (num1 * num2) / gcd(num1, num2);
        System.out.println("LCM: " + lcm);
    }
    
    public static int gcd(int a, int b) {
        if (b == 0) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    }
}
