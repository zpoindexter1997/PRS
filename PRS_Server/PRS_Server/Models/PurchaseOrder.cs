using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PRS_Server.Models
{
    public class PurchaseOrder
    {
        public string ProductName { get; set; }
        public string ProductNbr { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}
