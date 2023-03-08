import { ContainerInit, IconBox, Icon } from "@/styles";

interface Props {
  name: string;
  symbol: string;
}

export const SelectChainButton = ({ name, symbol }: Props) => {
  return (
    <>
      <ContainerInit>
        <IconBox size={24}>
          <Icon
            src={`assets/logos/${symbol.toLowerCase()}.png`}
            alt={symbol}
            size={18}
          />
        </IconBox>
        <p
          style={{
            color: "#4C5B7A",
            fontSize: "14px",
            fontFamily: "Poppins",
            marginLeft: "4px",
            fontWeight: 400,
          }}
        >
          {name}
        </p>
      </ContainerInit>

      <figure
        style={{
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            width: "18px",
            height: "18px",
          }}
          src="assets/icons/dropdown.png"
          alt="dropdown"
        />
      </figure>
    </>
  );
};
