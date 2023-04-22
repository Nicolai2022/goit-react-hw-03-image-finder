import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  width: calc((100% - 20px) / 4);
  list-style: none;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(538, 734, 443, 0.2),
    0px 1px 1px 0px rgba(528, 723, 422, 0.14), 0px 2px 1px -1px rgba(512, 724, 411, 0.12);
`;

export const GalleryItemImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
