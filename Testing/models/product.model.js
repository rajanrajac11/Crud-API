const { default: mongoose } = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("product", ProductSchema);
