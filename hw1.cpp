#include <iostream>
#include <string.h>

using namespace std;


class Pizza{
    string name;
    string size;
    string ingredients[];
    string crust_type;

    public:
    Pizza();
    Pizza(string size, string crust_type, int pizza_type);
    Pizza(Pizza&);
};

Pizza::Pizza(){
    size = "medium";
    crust_type = "normal";
    ingredients = {mozerella};
}

Pizza::Pizza(string size, string crust_type, int pizza_type){
    this->size = size;
    this->crust_type = crust_type;
    if(pizza_type == 1){
        this->name = "Chicken Pizza";
        this->ingredients = {mozarella, chicken, mushroom, corn, onion, tomato};

    }
    else if(pizza_type == 2){
        this->name = "Broccoli Pizza";
        this->ingredients = { mozarella, broccoli, pepperoni, olive, corn, onion}
    }
    else{
        this->name = "Sausage Pizza";
        this->ingredients = {mozarella, sausage, tomato, olive, mushroom, corn};
    }
}

Pizza::Pizza(Pizza &copied){
    name = copied.name;
    size = copied.size;
    crust_type = copied.crust_type;
    ingredients = copied.ingredients;
    cout<<"Please enter the numbers"<<endl;
    int x = 10;
    for(int i = 0; i < copied.ingredients.size(); i++){
        cout<<i+1<<". "<<copied.ingredients[i]<<endl;
    }
    while(x != 0){
        cin>>x;
        for(int i = 0; i < ingredients.size(); i++){
            if(strcmp(copied.ingredients[x - 1], ingredients[i] == 0){

                for(int j = i; j < ingredients.size() - 1; j++){
                    ingredients[j] = ingredients[j +1];
                }
            }
        }
    }
}


class Order{
    string customer;
    Pizza pizza[];
    string drinks[];

    public:
    Order(string customer, Pizza pizza, string drink);
    Order(string customer, Pizza pizza);
    int getPrice();
    void printOrder();
};

int Order::getPrice(){
    int cost;
    for(int i = 0; i < pizza.size(); i++){
        if(pizza[i].size == "small"){
            cost += 15;
        }
        else if(pizza[i].size == "medium"){
            cost += 20;
        }
        else if(pizza[i].size == "big"){
            cost += 25;
        }
    }
    return cost;
}

void Order::printOrder(){
    cout<<customer<<endl;

    for(int i = 0; i < pizza.size(); i++){
        cout<<pizza[i].name;
    }

}
/* 
class OrderList{
    int n;
    OrderList();
    public:
    void takeOrder();
    void listOrders();
    void deliverOrders();
};
*/

int main(){
    cout<<"Welcome to Unicorn Pizza!"<<endl;
    cout<<"1. Add an order"<<endl;
    cout<<"2. List orders"<<endl;
    cout<<"3. Deliver order"<<endl;
    cout<<"4. Exit"<<endl;

    string size1, crust_type;
    gets(size1);
    gets(crust_type);
    int x;
    cin>>x;
    Pizza pizza1(size1, crust_type, x);
    cout<<pizza1.name<<endl;
}