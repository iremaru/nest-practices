import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

export const handleError = (e) => {
  const { code, keyValue } = e;

  if (code === 11000) {
    const key = Object.keys(keyValue)[0];
    const value = Object.values(keyValue)[0];
    throw new BadRequestException(
      `Ya hay un '${key}' con el valor de '${value}' en la base de datos. Y este campo no permite valores duplicados.`,
    );
  }
  console.log(e);
  throw new InternalServerErrorException();
};
