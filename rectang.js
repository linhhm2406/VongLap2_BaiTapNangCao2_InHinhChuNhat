let length_rec=parseInt(prompt('Nhap vao chieu dai hcn'));
let width_rec=parseInt(prompt('Nhap vao rong dai hcn'));
let i,j,z;
let print_out1 ='';
let print_out2='';

for (i=1; i<=length_rec; i++){
    print_out1=print_out1+'*';
}
for (j=1; j<= width_rec; j++){
    for (z=1; z<=length_rec;z++)
    {
        if(z===1||z===length_rec){
        print_out2=print_out2+'*';
    }else {
            print_out2=print_out2+'&nbsp&nbsp';
        }
    }
    print_out2=print_out2+'<br>';
}

document.write(print_out1+'<br>'+print_out2+print_out1);



