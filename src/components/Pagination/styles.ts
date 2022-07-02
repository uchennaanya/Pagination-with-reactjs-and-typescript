import {
    FaCaretLeft,
    FaCaretRight,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
    width: 600px;
    display: grid;
    grid-template-columns: 1fr auto;
    font-size: 0.65rem;
    padding: 0.2rem;
  `;

const factory = (Component: any = FaChevronLeft) => styled(Component)`
    cursor: pointer;
  `;

const Left = factory(FaChevronLeft);

const AllLeft = factory(FaCaretLeft);

const Right = factory(FaChevronRight);

const AllRight = factory(FaCaretRight);

const PageContainer = styled.div`
    display: flex;
    align-items: center;
  `;

const Page = factory(
    styled.div<{ isActive?: boolean }>`
      padding: 0.2rem;
      font-weight: ${({ isActive }) => isActive && "bold"};
    `
);

const PageInfo = styled.div`
    display: grid;
    grid-template-columns: auto auto 1fr;
    grid-gap: 0.4rem;
    align-items: center;
  `;

export {
    Container,
    Left,
    AllLeft,
    PageContainer,
    Page,
    AllRight,
    Right,
    PageInfo,
};