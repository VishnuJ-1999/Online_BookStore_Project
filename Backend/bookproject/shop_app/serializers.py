from rest_framework import serializers
from .models import Product, Cart, CartItem
from django.contrib.auth import get_user_model


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["id","name","slug","image","description","category","price"]



class DetailedProductSerializer(serializers.ModelSerializer):
    similar_book = serializers.SerializerMethodField()
    class Meta:
        model = Product
        fields = ["id","name","price","slug","image","description","similar_book"]


    def get_similar_book(self, product):
        products = Product.objects.filter(category=product.category).exclude(id=product.id)
        serializer = ProductSerializer(products, many=True)
        return serializer.data
    



class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    total = serializers.SerializerMethodField()
    class Meta:
        model = CartItem
        fields = ["id", "quantity", "product", "total"]

    def get_total(self, cartitem):
        price = cartitem.product.price * cartitem.quantity
        return price




class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(read_only=True, many=True)
    sum_total = serializers.SerializerMethodField()
    no_of_items = serializers.SerializerMethodField()
    class Meta:
        model = Cart
        fields = ["id", "cart_code", "items", "sum_total", "no_of_items", "created_at", "modified_at"]

    def get_sum_total(self, cart):
        items = cart.items.all()
        total = sum([item.product.price * item.quantity for item in items])
        return total
    
    def get_no_of_items(self, cart):
        items = cart.items.all()
        total = sum([item.quantity for item in items])
        return total


        

class SimpleCartSerializer(serializers.ModelSerializer):
    no_of_items = serializers.SerializerMethodField()
    class Meta:
        model = Cart
        fields = ["id","cart_code","no_of_items"]

    def get_no_of_items(self, cart):
        no_of_items = sum([item.quantity for item in cart.items.all()]) 
        return no_of_items
    


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ["id", "username", "first_name", "last_name", "email", "city", "state", "address", "phone"]



 


