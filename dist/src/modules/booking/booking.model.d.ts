export interface Booking {
    id: string;
    is_corporate: string;
    booking_no: string;
    checkin: string;
    checkout: string;
    guest_name: string;
    total_amount_including_extra_cost: string;
    get_amount_paid: string;
    status_key: string;
    source_key: string;
    status: string;
    source: string;
    payment_type: string;
    ota_source: string;
    ota_prefix: string;
    ota_booking_id: string;
    meal_plan_type: string;
    contains_notes: string;
    no_of_adults: string;
    no_of_rooms: string;
    is_wizard_booking: string;
}
