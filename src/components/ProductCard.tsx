import * as React from 'react';
import { ProductGenericProps } from '../utils/Content';
import { AppConfig } from '../utils/AppConfig';

type ProductCard = {
  product: ProductGenericProps;
};

const ProductCard = (props: ProductCard) =>  (
    <div className="my-5 group relative">
      <div className="flex overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <div className="w-1/3  m-5" >
          <img
            src={props.product.image}
            alt={props.product.name}
            className="h-64 object-cover object-center"
          />
        </div>
        <div className="w-2/3 m-5">
          <h3 className="text-xl text-center text-gray-700">
            <a href={props.product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {props.product.name}
            </a>
          </h3>
          <p className="text-sm p-5">{props.product.description}</p>
          <p className="text-l dollars text-right font-medium text-gray-900">$ {Number(props.product.price).toLocaleString(AppConfig.locale)}</p>
        </div>
      </div>
    </div>
)

export { ProductCard };
