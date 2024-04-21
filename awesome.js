public class StringJoin {
    public static void main(String[] args) {
        String[] words = {"Java", "is", "awesome"};
        String joinedString = String.join(" ", words);
        System.out.println("Joined string: " + joinedString);
    }
}
