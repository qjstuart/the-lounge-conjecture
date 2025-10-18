import Button from "@/ui/Button/Button";

export default function Home() {
  return (
    <>
      <div>
        <Button
          // href="https://theloungeconjecture.com/"
          opensInNewTab={true}
          size="md"
          text="Sign guestbook"
          variant="primary"
        />
      </div>
      <div>Just some test text...</div>
    </>
  );
}
