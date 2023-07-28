import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { VenueModule } from './venue/venue.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Venue } from './venue/models/venue.model';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { VenuePhoto } from './venue_photo/models/venue_photo.model';
import { SeatModule } from './seat/seat.module';
import { Seat } from './seat/models/seat.model';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { SeatType } from './seat_type/models/seat_type.model';
import { HumanCategoryModule } from './human_category/human_category.module';
import { HumanCategory } from './human_category/models/human_category.model';
import { Admin } from './admin/models/admin.model';
import { AdminModule } from './admin/admin.module';
import { Customer } from './customer/models/customer.model';
import { CustomerAddress } from './customer_address/models/customer_address.model';
import { CustomerModule } from './customer/customer.module';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { EventModule } from './event/event.module';
import { Event } from './event/models/event.model';
import { Cart } from './cart/models/cart.model';
import { CartModule } from './cart/cart.module';
import { EvenTypeModule } from './even_type/even_type.module';
import { EventType } from './even_type/models/even_type.model';
import { Ticket } from './ticket/models/ticket.model';
import { TicketModule } from './ticket/ticket.module';
import { Status } from './status/models/status.model';
import { StatusModule } from './status/status.module';
import { VenueType } from './venue_type/models/venue_type.model';
import { VenueTypeModule } from './venue_type/venue_type.module';
import { District } from './district/models/district.model';
import { Region } from './region/models/region.model';
import { Lang } from './language/models/lang.model';
import { Booking } from './booking/models/booking.model';
import { Country } from './country/models/country.model';
import { CustomerCard } from './customer_card/models/customer_card.model';
import { DistrictModule } from './district/dist.module';
import { RegionModule } from './region/region.module';
import { LangModule } from './language/lang.module';
import { BookingModule } from './booking/booking.module';
import { CountryModule } from './country/country.module';
import { CustomerCardModule } from './customer_card/customer_card.module';
import { DeliveryMethod } from './delivery_method/models/delivery_method.model';
import { DiscountCoupon } from './discount_coupon/models/discount_coupon.model';
import { PaymentMethod } from './payment_method/models/payment_method.model';
import { DeliveryMethodModule } from './delivery_method/delivery_method.module';
import { DiscountCouponModule } from './discount_coupon/discount_coupon.module';
import { PaymentMethodModule } from './payment_method/payment_method.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [
        Venue,
        VenuePhoto,
        Seat,
        SeatType,
        HumanCategory,
        Admin,
        Customer,
        CustomerAddress,
        Event,
        EventType,
        Cart,
        Ticket,
        Status,
        VenueType,
        District,
        Region,
        Lang,
        Booking,
        Country,
        CustomerCard,
        VenueType,
        DeliveryMethod,
        DiscountCoupon,
        PaymentMethod,
      ],
    }),
    VenueModule,
    VenuePhotoModule,
    SeatModule,
    SeatTypeModule,
    HumanCategoryModule,
    AdminModule,
    CustomerModule,
    CustomerAddressModule,
    EventModule,
    EvenTypeModule,
    CartModule,
    TicketModule,
    StatusModule,
    VenueTypeModule,
    DistrictModule,
    RegionModule,
    LangModule,
    BookingModule,
    CountryModule,
    CustomerCardModule,
    VenueTypeModule,
    DeliveryMethodModule,
    DiscountCouponModule,
    PaymentMethodModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
