import CartIcon from "@/features/cart/components/CartIcon";
import Banner from "@/ui/banner/Banner";
import Button from "@/ui/button/Button";

export default function Home() {
  return (
    <>
      {/* <div>
        <Button
          // href="https://theloungeconjecture.com/"
          opensInNewTab={true}
          size="md"
          text="Sign guestbook"
          variant="primary"
        />
      </div> */}
      <div className="pt">
        <Banner
          message="...is where the heart is"
          title="Discography"
          CartIcon={<CartIcon itemCount={1} />}
        />
      </div>
    </>
  );
}
