import { Message, Shop, User } from '__generated__/__types__';

export enum QueryProductsOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  STATUS = 'STATUS',
  UPDATED_AT = 'UPDATED_AT',
  PRICE = 'PRICE',
  SALE_PRICE = 'SALE_PRICE',
  MAX_PRICE = 'MAX_PRICE',
  MIN_PRICE = 'MIN_PRICE',
  QUANTITY = 'QUANTITY',
  SOLD_QUANTITY = 'SOLD_QUANTITY',
}

export enum QueryFaqsOrderByColumn {
  CREATED_AT = 'created_at',
  ID = 'id',
  NAME = 'faq_title',
  DESCRIPTION = 'faq_description',
  ISSUED_BY = 'issued_by',
  TYPE = 'faq_type',
}

export enum QueryTermsOrderByColumn {
  CREATED_AT = 'created_at',
  ID = 'id',
  NAME = 'title',
  DESCRIPTION = 'description',
  ISSUED_BY = 'issued_by',
  IS_APPROVED = 'is_approved',
  TYPE = 'type',
}
export enum QueryCouponsOrderByColumn {
  CREATED_AT = 'created_at',
  EXPIRE_AT = 'expire_at',
  ID = 'id',
  CODE = 'code',
  AMOUNT = 'amount',
  NAME = 'title',
  DESCRIPTION = 'description',
  MINIMUM_CART_AMOUNT = 'minimum_cart_amount',
  IS_APPROVE = 'is_approve',
  TYPE = 'type',
}

export enum QueryFlashSaleOrderByColumn {
  START_DATE = 'start_date',
  END_DATE = 'end_date',
  ID = 'id',
  TITLE = 'title',
  DESCRIPTION = 'description',
  SALE_STATUS = 'sale_status',
}

export enum QueryProductsHasCategoriesColumn {
  SLUG = 'SLUG',
}

export enum QueryProductsHasTypeColumn {
  SLUG = 'SLUG',
}

export enum OrderStatus {
  PENDING = 'order-pending',
  PROCESSING = 'order-processing',
  COMPLETED = 'order-completed',
  CANCELLED = 'order-cancelled',
  REFUNDED = 'order-refunded',
  FAILED = 'order-failed',
  AT_LOCAL_FACILITY = 'order-at-local-facility',
  OUT_FOR_DELIVERY = 'order-out-for-delivery',
}

export enum PaymentStatus {
  PENDING = 'payment-pending',
  PROCESSING = 'payment-processing',
  SUCCESS = 'payment-success',
  FAILED = 'payment-failed',
  REVERSAL = 'payment-reversal',
  COD = 'payment-cash-on-delivery',
}

export enum PaymentGateway {
  STRIPE = 'STRIPE',
  COD = 'CASH_ON_DELIVERY',
  CASH = 'CASH',
}

export enum ProductApprovedStatus {
  Publish = 'publish',
  Approved = 'approved',
  UnPublish = 'unpublish',
}

export enum StoreNoticeType {
  all_vendor = 'all_vendor',
  specific_vendor = 'specific_vendor',
  all_shop = 'all_shop',
  specific_shop = 'specific_shop',
}
export enum CouponType {
  FIXED = 'fixed',
  PERCENTAGE = 'percentage',
  FREE_SHIPPING = 'free_shipping',
}

export interface ItemProps {
  id: number;
  title: string;
}

export enum QueryRefundReasonsOrderByColumn {
  NAME = 'NAME',
  SLUG = 'SLUG',
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
}
export enum QueryRefundPolicyOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  TITLE = 'TITLE',
  STATUS = 'STATUS',
  UPDATED_AT = 'UPDATED_AT',
}
export interface ProductTypeOptions {
  name: string;
  slug: string;
}

export interface MappedPaginatorInfo {
  currentPage: number;
  firstPageUrl: string;
  from: number;
  lastPage: number;
  lastPageUrl: string;
  links: any[];
  nextPageUrl: string | null;
  path: string;
  perPage: number;
  prevPageUrl: string | null;
  to: number;
  total: number;
  hasMorePages: boolean;
}

export enum FlashSaleType {
  PERCENTAGE = 'percentage',
  FIXED_RATE = 'fixed_rate',
  DEFAULT = 'percentage',
  // WALLET_POINT_GIFT = 'wallet_point_gift',
  // FREE_SHIPPING = 'free_shipping',
}

export interface Conversations {
  id: string;
  created_at: string;
  updated_at: string;
  shop_id: number;
  unseen?: boolean;
  user_id: string;
  user: User;
  shop: Shop;
  latest_message: Message;
}

export enum StoreNoticePriorityType {
  High = 'high',
  Medium = 'medium',
  Low = 'low',
}
