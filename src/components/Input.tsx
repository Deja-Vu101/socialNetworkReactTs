
interface OwnProps{
	inputValue: string
	onChangeSearchUser: (e: string) => void
}

const Input: React.FC<OwnProps> = ({
	inputValue,
	onChangeSearchUser
}) => {
  return (
    <>
      <input
        style={{ border: "1px solid black" }}
        type="text"
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChangeSearchUser(e.target.value)
        }
      />
    </>
  );
};

export default Input;
