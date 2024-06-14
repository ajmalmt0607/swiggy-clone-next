import { NextResponse } from "next/server";
import connect from "../../../lib/config/db";
import menuItem from "../../../lib/models/menuItem";

export const GET = async (request) => {
    try {
        await connect();
        const menuItems = await menuItem.find();
        return new NextResponse(JSON.stringify(menuItems), {
            status: 200,
        });
    } catch (error) {
        return new NextResponse("Error in fetching" + error, { status: 500 });
    }
};
